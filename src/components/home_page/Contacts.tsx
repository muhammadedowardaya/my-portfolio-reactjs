export default function Contacts() {
	return (
		<div className="text-[#003c45] bg-[#fef6e3] relative">
			{/* wave background top */}

			<div className="py-20 sm:pb-0 px-8 lg:pt-40">
				<h2 className="font-bebas_neue text-2xl lg:text-6xl text-center">
					MESSAGE ME, IF YOU WANT <br />
					COLLABORATED WITH ME
				</h2>
				<p className="text-center text-lg mt-6">
					Message Muhammad Edo Wardaya if you interested to collaborated with
					him
				</p>
				<div>
					<form
						action=""
						className="
                            grid gap-4 mt-8 mx-auto w-full max-w-[800px] border-2 border-[#003c45] rounded-lg
                            grid-cols-2 bg-white p-6 text-[#003c45]
                        "
					>
						<div className="col-span-2 md:col-span-1">
							<label
								htmlFor="first_name"
								className="text-xl mb-2 block font-barlow_condensed font-semibold"
							>
								FIRST NAME
							</label>
							<input
								type="text"
								id="first_name"
								name="first_name"
								placeholder="ex. Edo"
								className="block w-full py-2 px-2 border focus-visible:outline-[#003c45] focus-visible:outline focus-visible:outline-2 border-[#003c45] rounded-md"
							/>
						</div>
						<div className="col-span-2 md:col-span-1">
							<label
								htmlFor="last_name"
								className="text-xl mb-2 block font-barlow_condensed font-semibold"
							>
								LAST NAME
							</label>
							<input
								type="text"
								id="last_name"
								name="last_name"
								placeholder="ex. Wardaya"
								className="block w-full py-2 px-2 border focus-visible:outline-[#003c45] focus-visible:outline focus-visible:outline-2 border-[#003c45] rounded-md"
							/>
						</div>
						<div className="col-span-2 md:col-span-1">
							<label
								htmlFor="email"
								className="text-xl mb-2 block font-barlow_condensed font-semibold"
							>
								EMAIL ADDRESS
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="ex. muhammadedowarday4@gmail.com"
								className="block w-full py-2 px-2 border focus-visible:outline-[#003c45] focus-visible:outline focus-visible:outline-2 border-[#003c45] rounded-md"
							/>
						</div>
						<div className="col-span-2">
							<label
								htmlFor="email"
								className="text-xl mb-2 block font-barlow_condensed font-semibold"
							>
								BRIEF PROJECT
							</label>
							<textarea
								id="message"
								name="message"
								placeholder="ex. I have project build front end website"
								className="h-32 resize-none block w-full py-2 px-2 border focus-visible:outline-[#003c45] focus-visible:outline focus-visible:outline-2 border-[#003c45] rounded-md"
							/>
						</div>
						<div className="col-span-2">
							<input
								type="submit"
								value="SEND NOW"
								className="bg-[#013d45] text-white font-barlow_condensed font-bold text-2xl md:text-3xl rounded-full px-2 py-2 w-full"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
