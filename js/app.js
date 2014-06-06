$(document).ready(function() {

    var h1 = $('article h1');
    var h2 = $('article h2');
    var h1Hover = [
        'Basecamp is the project management tool you wish you had on your last project.',
        'Highrise remembers the important things about people you\'d normally forget.',
        'From near or far, Campfire helps teams work together over the web in real-time.'
    ];
    var h2Hover = [
        'Are you still managing projects with email?  Are you still using Excel for your to-do lists?  Its time to upgrade to Basecamp.  Manage projects and collaborate with your team and clients the modern way.',
        'Keep a permenant record of people you do business with.  Know who you talked to, when you talked to them, what was said, and when to follow up next.  Over 20,000,000 contacts are tracked using Highrise.',
        'Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room.  We couldn\'t run our own business without Campfire.'
    ];
    var h1Default = 'Making collaboration productive and enjoyable for people every day.';
    var h2Default = 'Frustration-free web-based apps for collaboration, sharing information, and making decisions.';

    $('.badge').hover(function() {
        $(this).find('.arrow').show();
        var h1HoverLength = h1Hover.length;
        for (var i = 0; i < h1HoverLength; i++) {
            h1.text(h1Hover[i]);
        };
    }, function() {
        $(this).find('.arrow').hide();
        h1.text(h1Default);
        h2.text(h2Default);
    });
});