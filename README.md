cutekitten
==========

Heroku proxy for Place Kitten (http://placekitten.com). Exists for the sole purpose of adding a ".jpg" extension to the image link so it appears appropriately in Campfire when trigged from hubot.

To see how it works, compare http://placekitten.com/200/200 with http://cutekittenme.herokuapp.com/200x200.jpg. To your wonderment, they are the EXACT SAME!

I'll checkin the hubot script for campfire when I'm marginally happy with it.

To run:
<pre>
node app.js
</pre>

And then visit http://localhost:5000/200x200.jpg

The Rules
==========
* You have to supply both x and y (this is different than the placekitten approach which assumes y given x)
* You have to supply a .jpg literal extension