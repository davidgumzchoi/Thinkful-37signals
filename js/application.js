$(document).ready(function() {

    var h1 = $('article h1');
    var h2 = $('article h2');
    var h1Default = 'Making collaboration productive and enjoyable for people every day.';
    var h2Default = 'Frustration-free web-based apps for collaboration, sharing information, and making decisions.';
    var h1Basecamp = 'Basecamp is the project management tool you wish you had on your last project.';
    var h2Basecamp = 'Are you still managing projects with email?  Are you still using Excel for your to-do lists?  Its time to upgrade to Basecamp.  Manage projects and collaborate with your team and clients the modern way.';
    var h1Highrise = 'Highrise remembers the important things about people you\'d normally forget.';
    var h2Highrise = 'Keep a permenant record of people you do business with.  Know who you talked to, when you talked to them, what was said, and when to follow up next.  Over 20,000,000 contacts are tracked using Highrise.';
    var h1Campfire = 'From near or far, Campfire helps teams work together over the web in real-time.';
    var h2Campfire = 'Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room.  We couldn\'t run our own business without Campfire.';

    $('.arrow').hide();
    $('.badge.badge1').hover(function() {
        $('.arrow.arrow1').show();
        h1.text(h1Basecamp);
        h2.text(h2Basecamp);
    }, function() {
        $('.arrow.arrow1').hide();
        h1.text(h1Default);
        h2.text(h2Default);
    });

    $('.badge.badge2').hover(function() {
        $('.arrow.arrow2').show();
        h1.text(h1Highrise);
        h2.text(h2Highrise);
    }, function() {
        $('.arrow.arrow2').hide();
        h1.text(h1Default);
        h2.text(h2Default);
    });

    $('.badge.badge3').hover(function() {
        $('.arrow.arrow3').show();
        h1.text(h1Campfire);
        h2.text(h2Campfire);
    }, function() {
        $('.arrow.arrow3').hide();
        h1.text(h1Default);
        h2.text(h2Default);
    });
});