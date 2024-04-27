<!-- IOSTutorial.svelte -->
<script>
    import { base } from '$app/paths';
</script>
<div>
	<h2>iOS Tutorial</h2>
	<ul>
		<li>get <a href="https://3dscannerapp.com/">3D Scanner App</a> from app store</li>
		<img src={`${base}/tuts/3d-scanner-app.png`} alt="">

		<li>select 'TrueDepth' for scan mode</li>
		<img src={`${base}/tuts/true-depth.jpeg`} alt="">

		<li>make sure your hair is outa the way</li>
		<img src={`${base}/tuts/vr-selfie-1.png`} alt="">				
		<li>use TrueDepth mode to scan your face</li>
		<li>share as "xyz color" point cloud to porchlogic0@gmail.com</li>
	</ul>
</div>
