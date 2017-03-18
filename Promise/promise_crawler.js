var http = require('http');
var Promise = require('bluebird');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';
var baseUrl = 'http://www.imooc.com/learn/';
var fs = require("fs");
var videoIds = [348, 259, 197, 134, 75];

function filterChapters(html) {
	var $ = cheerio.load(html);

	var chapters = $('.chapter');
	var title = $('.course-infos .w .hd h2').text();
	var score = parseFloat($($('.statics .score-btn .meta-value')[0]).text(), 10);

	var courseData = {
		title: title,
		score: score,
		videos: []
	};

	chapters.each(function(item) {
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text().trim();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		}

		videos.each(function(item) {
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text().trim().split(" ");
			videoTitle = videoTitle[0] + videoTitle[1];
			var id = video.attr('href').split("video/")[1];
			chapterData.videos.push({
				title: videoTitle,
				id: id
			})
		})
		courseData.videos.push(chapterData);
	})

	return courseData;
}

function printCourseInfo(coursesData) {

	coursesData.forEach(function(courseData) {
		console.log( courseData.title + " " + courseData.score + '\n');
	})

	coursesData.forEach(function(courseData){
		console.log( courseData.title + '\n');	
		courseData.videos.forEach(function(item) {
			var chapterTitle = item.chapterTitle;
			console.log(chapterTitle);

			item.videos.forEach(function(video) {
				console.log("	[" + video.id + "]	" + video.title );
			})
		})
	})
}

function getPageAsync(url) {
	return new Promise(function(resolve, reject) {
		console.log("正在爬取 " + url);

		http.get(url, function(res) {
			var html = '';

			res.on('data', function(data) {
				html += data;
			})

			res.on('end', function() {
				resolve(html);
			})
		}).on('error', function(e) {
			reject(e);
			console.log('failed to request course data!');
		})

	})
}

var fetchCourseArray = [];

videoIds.forEach(function(id) {
	fetchCourseArray.push(getPageAsync(baseUrl + id));
})

Promise
	.all(fetchCourseArray)
	.then(function(pages) {
		var coursesData = [];
		pages.forEach(function(html) {
			var courses = filterChapters(html);
			coursesData.push(courses);
		})

		coursesData.sort(function(a, b) {
			return a.score < b.score;
		});

		printCourseInfo(coursesData);
	})
