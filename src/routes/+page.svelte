<script>
	import PricingCards from "../lib/PricingCards.svelte";

	
	import { onMount } from 'svelte';

	import { base } from '$app/paths';
	console.log('---------Base path:', base);
	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		document.head.appendChild(script);

		const link = document.createElement('link');
		link.href = 'https://assets.calendly.com/assets/external/widget.css';
		link.rel = 'stylesheet';
		document.head.appendChild(link);
	});

	function openCalendlyPopup() {
		Calendly.initPopupWidget({
		url: 'https://calendly.com/porchlogic0/fitting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=3e3e3e&text_color=acb6b6&primary_color=06ade4'
		});
	}
</script>

<div class="background">

<div class="video-wrapper">
	<iframe id="liveStream" width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UChgifjY5u89KyvE4wBIhNjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	<!-- <img id="placeholder" src="/VR-Face-Hug.png" alt="Stream Offline" style="display:none; width: 1920px; height: 1080px;"> -->
</div>

<div class="container">



	

	<div class="s1">
	<div class="section">
		<div class="statement">
			<h1>VR Face Hug</h1>
			<p>A bespoke pillow <br/>
			perfectly molds to your face <br/>
			works with the Quest 3</p>
		</div>
		<div class="image">
			<img src={`${base}/VR-Face-Hug.png`} alt="VR Face Hug facial interface">
		</div>
	</div>
	</div>
	
	<div class="s2">
	<h2 class="step"><span class="highlight">Step 1. </span> Create 3D Face Scan</h2>
	<div class="section-cards">		
		<div class="card">
			<h3>iphone tutorial</h3>
			<div class="video-wrapper">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/IW6DM3X5bBA?si=9jswj_qs2Kfv4rLt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
			<ul>
				<li>get 3D Scanner App</li>
				<li>make sure your hair is outa the way</li>
				<li>use TrueDepth mode to scan your face</li>
				<li>share as "xyz color" point cloud to porchlogic0@gmail.com</li>
			</ul>
		</div>

		<div class="between">
		<p style="color:greenyellow;font-size:36px">or</p>
		</div>

		<div class="card">
			<h3>android tutorial</h3>
			<div class="video-wrapper">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/IW6DM3X5bBA?si=9jswj_qs2Kfv4rLt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
			<ul>
				<li>get PolyCam App</li>
				<li>make sure your hair is outa the way</li>
				<li>...</li>
				<li>share as "..." point cloud to porchlogic0@gmail.com</li>
			</ul>
		</div>
	</div>
	</div>

	<div class="s3">
	<h2 class="step"><span class="highlight">Step 2. </span> Schedule a Virtual Fitting</h2>

	<div class="section-calendar">

			<!-- <div>
				<div class="calendly-inline-widget" data-url="https://calendly.com/porchlogic0/fitting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=3D3839&text_color=a1e4e7&primary_color=3fc567" style="min-width:320px;height:700px;"></div>
				<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
			</div> -->


			<!-- <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
			<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
			<a href="#" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/porchlogic0/fitting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=3e3e3e&text_color=acb6b6&primary_color=06ade4'}); return false;">Schedule Fitting</a> -->

			<button class="cyber-button" on:click="{openCalendlyPopup}">Schedule Fitting</button>

			<p>(Don't schedule yet, not ready.)</p>

			<!-- <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
			<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
			<script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/porchlogic0/fitting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=616161&text_color=dbdbdb&primary_color=26dfac', text: 'Schedule Fitting', color: '#41a9a5', textColor: '#ffffff', branding: undefined }); }</script> -->



				<!-- Calendly inline widget begin -->
				<!-- <div class="calendly-inline-widget" data-url="https://calendly.com/porchlogic0/fitting?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div> -->
				<!-- <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> -->
				<!-- Calendly inline widget end -->


	</div>
	</div>
	<h2 class="step"><span class="highlight">Step 3. </span> Join the Beta</h2>

	<PricingCards />

</div>

</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Jersey+10&family=Mina:wght@400;700&family=Nanum+Brush+Script&display=swap');
	
	.background {
		background-size: 100% 100%;
		background-position: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
		background-image: radial-gradient(100% 60% at 100% 84%, #0E2D37FF 0%, #172117FF 50%, #131313 100%);
	}	
	.container {
		max-width: 960px;
		margin: auto;
		padding: 20px;

		font-family: "Mina", sans-serif;
		font-weight: 200;
		font-style: normal;
		font-size: 1.25em;
		color: rgb(193, 75, 126);

	}

	.video-wrapper {
		aspect-ratio: 16 / 9;
		width: 100%;
		position: relative;
		padding-bottom: 0px;
	}

	iframe {
		width: 100%;
		height: 100%;
		/* position: absolute; */
		border: none;
		outline: none;
	}

	h1 {
		color: aliceblue;
		font-size: 2.5em;
		margin: 2px;
		margin-bottom: 25px;
	}

	h2 {
		margin:0;
		padding:0;
	}

	p {
		color: rgb(174, 187, 187);
		font-size: 20px;
		margin: 2px;
	}

	.section {
		display: flex;
		justify-content: center;
		/* border: 1px solid #596a81; */
		padding-top: 120px;
		padding-bottom: 120px;
	}
	.section-cards {
		display: flex;
		justify-content: space-around;
		/* border: 1px solid #596a81; */
		padding-top: 120px;
		padding-bottom: 120px;
	}

	.s1 {
		/* background-color: rgb(44, 44, 44); */
		margin: 0;
		padding: 0;
	}
	.s2 {
		/* background-color: rgb(28, 46, 44); */
		margin: 0;
		padding: 0;
	}
	.s3 {
		/* background-color: rgb(14, 30, 43); */
		margin: 0;
		padding: 0;
	}

	.statement {		
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		width: 50%;
		font-family: 'stealth57';
		/* border: 1px solid #596a81; */
	}
	.statement p {
		font-family: "Mina", sans-serif;
		font-weight: 200;
		font-style: normal;
		font-size: 1.25em;
		line-height: 150%;
		color: rgb(193, 75, 126);
	}

	.image {		
		width: 50%;
		display: flex;

		/* border: 1px solid #596a81; */
	}

	.card {
		width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		/* border: 1px solid #596a81; */

		/* background-color: rgba(91, 252, 164, 0.035); */
		border: none;
		border-radius: 6px;
		color: #97c4c7;
		padding: 12px 24px;
		transition: background-color 0.3s ease-in-out, transform 0.3s ease;
		outline: none;
		box-shadow: 0 0 25px rgba(6, 172, 228, 0.253); /* Glowing effect */
	}

	.between {
		width: 15% !important;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		padding: 15px;
	}

	.card ul {
		text-align: left;
	}

	.video {
		height: 400px;
	}

	.section-calendar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 220px;
		padding-bottom: 220px;
	}

	.calendly-badge-widget {

	}

	.cyber-button {
	width: 50%;
    background-color: #06ade4; /* Bright neon blue, typical of cyber themes */
    border: none;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    padding: 12px 24px;
    text-transform: uppercase;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease;
    outline: none;
    box-shadow: 0 0 15px rgba(6, 173, 228, 0.75); /* Glowing effect */
  }

  .cyber-button:hover, .cyber-button:focus {
    background-color: #08b1ff; /* A lighter shade for hover */
    transform: scale(1.05); /* Slightly enlarges on hover */
    box-shadow: 0 0 20px rgba(6, 173, 228, 1); /* Stronger glow on hover */
  }

  .cyber-button:active {
    background-color: #058cb6; /* Darker shade when clicked */
    box-shadow: 0 0 10px rgba(6, 173, 228, 1); /* Smaller glow on click */
  }

	.step {
		text-align: left;
		font-size: 2em;
		font-weight: 100;
		padding-left: 20px;
		padding-top: 15px;
		z-index: 2;
		/* margin-top: 120px; */
		/* margin-bottom: 60px; */
	}
	.highlight {
		position: relative;
		display: inline-block;
		font-weight: 100;
		color: rgb(71, 130, 232);
		font-family: 'stealth57';
		z-index: 2;
	}
	.highlight::after {
		content: '';
		position: absolute;
		top: 0.05em;    /* adjust to move the highlight up/down */
		left: -10.1em;  /* adjust to stretch the highlight a bit to the left */
		width: 13em;
		height: 100%;
		background-color: rgba(231, 231, 231, 0.062);
		z-index: -1;
		opacity: 0.9;
		pointer-events: none;
		border-radius: 10px;
		}

	@media (max-width: 768px) {
	  .section {
		flex-direction: column-reverse; /* Stack items vertically with image on top */
	  }
	  .statement, .image {
		flex: none; /* Reset flex settings */
		width: 100% !important; /* Take full width */
	  }
	}

	img {
		width: 100%;
		height: auto;
		max-height: 100%; /* Ensure the image does not overflow its container */
	}
</style>