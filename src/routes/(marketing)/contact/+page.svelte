<section class="bg-base-100">
	<div class="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
		<h2 class="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-800">
			Contact Us
		</h2>
		<p class="mb-8 text-center font-light text-gray-600 sm:text-xl lg:mb-16">
			Got a technical issue? Want to send feedback about a feature? Let us know.
		</p>
		<form action="#" class="space-y-8">
			<div>
				<label for="email" class="mb-2 block text-sm font-medium text-gray-700">Your email</label>
				<input
					type="email"
					id="email"
					class="focus:ring-primary-500 focus:border-primary-500  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
					placeholder="support@pointlift.com"
					required
				/>
			</div>
			<div>
				<label for="subject" class="mb-2 block text-sm font-medium text-gray-700">Subject</label>
				<input
					type="text"
					id="subject"
					class="focus:ring-primary-500 focus:border-primary-500  block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm"
					placeholder="Let us know how we can help you"
					required
				/>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="mb-2 block text-sm font-medium text-gray-700"
					>Your message</label
				>
				<textarea
					id="message"
					rows="6"
					class="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
					placeholder="Leave a comment..."
					required
				/>
			</div>
			<button type="submit" class="btn rounded-2xl">Send message</button>
		</form>
	</div>
</section>
