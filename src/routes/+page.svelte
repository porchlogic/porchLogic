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

		return () => {
            window.removeEventListener('click', closePopup);
        };
	});

	let isOpenIOS = false;
	let isOpenAndroid = false;

	function openIOSPopup() {
        isOpenIOS = true;
        window.addEventListener('click', closeIOSPopup);
        disableScrolling();
    }

	function openAndroidPopup() {
        isOpenAndroid = true;
        window.addEventListener('click', closeAndroidPopup);
        disableScrolling();
    }

    function closeIOSPopup(event) {
        if (!event.target.closest('.popup-content-ios')) {
            isOpenIOS = false;
			enableScrolling();
            window.removeEventListener('click', closeIOSPopup);
        }
    }

	function closeAndroidPopup(event) {
        if (!event.target.closest('.popup-content-android')) {
            isOpenAndroid = false;
			enableScrolling();
            window.removeEventListener('click', closeAndroidPopup);
        }
    }

	function handleCloseButton(isIOS = true) {
        if (isIOS) {
            isOpenIOS = false;
        } else {
            isOpenAndroid = false;
        }
		enableScrolling();
        window.removeEventListener('click', isIOS ? closeIOSPopup : closeAndroidPopup);
    }

	function disableScrolling() {
        document.body.style.overflow = 'hidden';
    }

    function enableScrolling() {
        document.body.style.overflow = '';
    }
</script>



<div class="video-wrapper">
	<iframe id="liveStream" width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UChgifjY5u89KyvE4wBIhNjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	<!-- <img id="placeholder" src="/VR-Face-Hug.png" alt="Stream Offline" style="display:none; width: 1920px; height: 1080px;"> -->
</div>

<div class="background">

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
			
			<button on:click|stopPropagation={openIOSPopup}>iOS Tutorial</button>

			{#if isOpenIOS}
				<div class="popup">
					<div class="popup-content ios" on:click|stopPropagation>
						<button class="close-button" on:click={() => handleCloseButton(true)}>X</button>
												
						<h2>iOS Tutorial</h2>

						<div class="tut-step">
							<p>We will need two separate 3d scans: one with headset and one without</p>
							<p style="color:darkred">Your scan will be deleted from our system after the product is made,
								unless you specify for us to keep it for future mods.
							</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/scan-naked.png`} alt="">
								<img src={`${base}/tuts/scan-headset.png`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>get and open<a href="https://3dscannerapp.com/">3d Scanner App</a> from the app store</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/3d-scanner-app.png`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>tap the "NORMAL" button...</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/normal.jpeg`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>...and select "TrueDepth" for the scan mode</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/true-depth.jpeg`} alt="">
							</div>
						</div>						

						<div class="tut-step">
							<p>Tap the red record button and start scanning and slowly capture your face from all angles,
								then tap again to finish, once your entire face is filled in.
							</p>
							<p style="color:darkred">Keep your head perfectly still while scanning!
							</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/vr-selfie-1.png`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>Process your scan by hitting "start"
							</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/process.jpeg`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>tap "share"</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/share.jpeg`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>tap "point cloud"</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/point-cloud.jpeg`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>tap "low density"</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/density.jpeg`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>choose either "XYZ color" or "XYZ no color"</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/xyz-color.jpeg`} alt="">
								<img src={`${base}/tuts/xyz-no-color.jpeg`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>Email to ian@porchlogic.com and schedule your virtual fitting!</p>
						</div>

						

					</div>
				</div>
			{/if}
			
		</div>

		<div class="between">
		<p style="color:greenyellow;font-size:36px">or</p>
		</div>

		<div class="card">
			
			<button on:click|stopPropagation={openAndroidPopup}>Android Tutorial</button>

			{#if isOpenAndroid}
				<div class="popup">
					<div class="popup-content android" on:click|stopPropagation>
						<button class="close-button" on:click={() => handleCloseButton(false)}>X</button>
						
						
						<h2>Android Tutorial</h2>

						<div class="tut-step">
							<p>We will need two separate 3d scans: one with headset and one without</p>
							<p style="color:darkred">Your scan will be deleted from our system after the product is made,
								unless you specify for us to keep it for future mods.
							</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/scan-naked.png`} alt="">
								<img src={`${base}/tuts/scan-headset.png`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>get and open<a href="https://poly.cam/">Polycam</a> from the play store</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/polycam.png`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>set Polycam to video mode</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/polycam-video-mode.png`} alt="">
							</div>
						</div>
						
						<div class="tut-step">
							<p>Tap the record button to start scanning and slowly capture your face from all angles (using the rear camera).
							</p>
							<p style="color:darkred">Keep your head perfectly still while scanning!
							</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/vr-selfie-2.png`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>tap "upload and process"</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/upload-process.png`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>Once it is processed, tap export</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/export.png`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>select GLTF</p>
							<div class='tut-images'>
								<img src={`${base}/tuts/gltf.png`} alt="">
							</div>
						</div>

						<div class="tut-step">
							<p>Email file to ian@porchlogic.com and schedule your virtual fitting!</p>
						</div>
						

					</div>
				</div>
			{/if}
			
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
	
	/* .background {
		background-size: 100% 100%;
		background-position: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
		background-image: radial-gradient(100% 60% at 100% 84%, #0E2D37FF 0%, #172117FF 50%, #131313 100%);
	} */

	.background {
		background-size: 100% 150%;
		background-position: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
		background-image: linear-gradient(184deg, #131313 1%, #131313DB 32%, #FFFFFF00 81%, #FFFFFF00 91%, #FFFFFF00 100%),linear-gradient(162deg, #131313 1%, #131313C9 35%, #1313137A 64%, #FFFFFF00 85%, #FFFFFF00 96%, #FFFFFF00 100%),radial-gradient(18% 28% at 24% 92%, #CEFAFF4D 7%, #073AFF00 100%),radial-gradient(18% 28% at 18% 125%, #FFFFFF0D 6%, #073AFF00 100%),radial-gradient(70% 53% at 36% 112%, #73F2FF14 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 122%, #FFFFFF05 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 116%, #FFFFFF0D 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 96%, #FFFFFF0A 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 105%, #FFFFFF0D 24%, #073AFF00 100%),radial-gradient(30% 29% at 72% 87%, #D3FF6D12 0%, #073AFF00 100%),radial-gradient(35% 56% at 91% 107%, #121212EB 9%, #073AFF00 100%),radial-gradient(74% 86% at 67% 97%, #6DFFAE30 24%, #073AFF00 100%),linear-gradient(125deg, #5ED8FFFF 1%, #000000FF 100%);
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

		margin-top: -3px;
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
		scrollbar-width: 0px;
		-ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;  /* Firefox */
		overflow: scroll;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		text-align: center;
		/* border: 1px solid #596a81; */

		/* background-color: rgba(91, 252, 164, 0.035); */
		border: none;
		border-radius: 6px;
		color: #97c4c7;
		padding: 40px 24px;
		transition: background-color 0.3s ease-in-out, transform 0.3s ease;
		outline: none;
		box-shadow: 0 0 25px rgba(6, 172, 228, 0.253); /* Glowing effect */
	}
	.card::-webkit-scrollbar {
		display: none;
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
	.card li {
		margin-top: 20px;
	}

	.video {
		height: 400px;
	}

	.section-calendar {
		display: flex;
		flex-direction: column;
		align-items: center;
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


	.popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.799);
		/* overflow-y: auto; */
        display: flex;
        justify-content: center;
        z-index: 1000;

		/* position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 80%;
        background-color: rgb(24, 30, 37);
        padding: 20px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        overflow-y: auto;
        z-index: 1000; */

		
    }
	.popup img {
		width:50%;
	}
    .popup-content {
        width:600px;
		margin-top:10%;
		margin-bottom:10%;
		padding: 15px;
        border-radius: 8px;
		background-color: rgba(0, 0, 0, 0.899);
        position: relative;
		text-align: center;
		overflow-y: auto;

		display: flex;
		flex-direction: column;
		align-items: left;		
    }
	.tut-step {
		text-align: left;
		display: flex;
		flex-direction: column;
		align-items: left;
		margin-top: 105px;		
	}
	.tut-step p {
		font-size: 28px;
	}
	.tut-images {
		display: flex;
		align-content: center;
		margin: 5%;
	}
	.tut-images img {
		flex-grow: 1;
	}
	.tut-step img {
		margin-top: 15px;
		margin-left: auto;
		margin-right: auto;
	}
    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background: none;
        font-size: 16px;
        cursor: pointer;
    }
</style>