<script>
	const plans = [
		{ 
			name: "Beta Tester", 
			price: "$39",
			features: [
				"VR Face Hug v0.9", 
				"One update for cost of materials + shipping"],
			style: "style1",
			link: "https://buy.stripe.com/fZecQT19ye3q0U0cMM"
		},
		{ 
			name: "Supporter", 
			price: "$69", 
			features: [
				"VR Face Hug v0.9", 
				"Three updates for cost of materials + shipping"],
			style: "style2",
			link: "#"
		},
		{ 
			name: "Investor", 
			price: "$120", 
			features: [
				"VR Face Hug v0.9", 
				"Three updates for cost of materials + shipping", 
				"NFT"],
			style: "style3",
			link: "#"
		},
	];
</script>

<style>
	.style1 {
		background-color: #515151;
	}
	.style2 {
		background-color: #2b2d34;
		color: #3372a2;
	}
	.style3 {
		background-color: #203433;
		color: darkgoldenrod;
	}
	.notice {
		margin-top: 50px;
		text-align: center;
	}
	.card-container {
		display: flex;
		justify-content: space-around;
		padding: 10px;
		flex-wrap: wrap; /* Ensures that cards can wrap on smaller screens */

		margin-top: 50px;
		margin-bottom: 150px;
	}
	.card {
		/* border: 1px solid #ccc; */
		/* background-color: #272727; */
		border-radius: 8px;
		padding: 20px;
		width: 25%;
		text-align: center;
		margin-bottom: 20px; /* Adds spacing between cards when stacked */
	}
	.card h2 {
		font-family: stealth57;
		font-size: 1em;
	}
	.price {
		font-size: 24px;
		color: #333;
	}
	.features {
		text-align: left;
		margin-top: 20px;
		color: rgb(65, 187, 167);
	}
	button {
		background-color: rgb(38, 38, 40);
		color: white;
		border: none;
		border-radius: 4px;
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
		margin-top: 20px;
	}
	@media (max-width: 600px) {
		.card-container {
			flex-direction: column;
			align-items: center;
		}
		.card {
			width: 80%; /* Makes each card wider on smaller screens */
		}
	}
</style>
<div class="notice">Don't buy. It's not ready yet.</div>
<div class="card-container">
	
	{#each plans as plan}
	<div class="card {plan.style}">
		<h2>{plan.name}</h2>
		<!-- <p class="price">-</p> -->
		<ul class="features">
			{#each plan.features as feature}
			<li>{feature}</li>
			{/each}
		</ul>
		<a href="{plan.link}" style="text-decoration: none;">
			<button>{plan.price}</button>
		</a>
	</div>
	{/each}
</div>
