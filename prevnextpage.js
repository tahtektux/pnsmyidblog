
<script type='text/javascript'>
//<![CDATA[
if (typeof(jQuery) == 'undefined') {document.write("<scr" + "ipt type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js\"></scr" + "ipt>");}
//]]>
</script>
<script type='text/javascript'>
//<![CDATA[
(function($){  
    var newerLink = $('a.blog-pager-newer-link');
    var olderLink = $('a.blog-pager-older-link');
    $.get(newerLink.attr('href'), function (data) {
     newerLink.html($(data).find('.post h1.post-title').text());  
    },"html");
    $.get(olderLink.attr('href'), function (data2) {
     olderLink.html($(data2).find('.post h1.post-title').text());  
    },"html");
})(jQuery);
//]]>
</script>

