1. <script src="code.jquery-1.12.0.min.js"></script>

2. $(document).ready(function(){});

3. <section>
	<p class="spoiler"></p>
	<p class="spoiler"></p>
	<p class="spoiler"></p>
</section>

4. .spoiler {
	display: none;
};

5. $("button").on("click", function(){
	$("this.button")toggle("display");
});

6. The dollar sign is put at the beginning of all jQuery code to reference the jQuery library.

7. 1. The jQuery library has built in effects that are easy to use.
   2. There is less code to write compared to vanilla JS.
   3. The code is condensed (it's a lighter load on the website) when compared to vanilla JS.

8. An IIFE is code that is kept separate from the global scope as to not clutter it. The code is contained in (). IIFEs execute code immediately after the function is created.

9. (function(){
	console.log("Hello, World!");
})();

10. $("#my-info")

11. $(".hero")

12. $("li")

13. var JSON = {
	id: 1,
	name: "Vanilla Java Porter",
	price: 5.99,
	pairs: ["pan-seared salmon", "cayenne lime butter", "pasta with cream sauce"]
};

14. GET retrieves information from the server, while POST transfers information to the server.