<script>
    import { onMount, onDestroy } from 'svelte';
    export let isOpen = false;
    export let closePopup;

    function handleClickOutside(event) {
        const popup = document.querySelector('.popup');
        if (popup && !popup.contains(event.target)) {
            closePopup();
        }
    }

    onMount(() => {
        // Ensures this code block runs only in the client-side
        window.addEventListener('click', handleClickOutside);

        // Return a cleanup function to be called on component destroy
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    });
</script>

<style>
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        background-color: rgb(24, 30, 37);
        padding: 20px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        overflow-y: auto;
        z-index: 1000;
        display: none;
    }
    .open {
        display: block;
    }
    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

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
</style>

<div class={isOpen ? 'popup open' : 'popup'} on:click|stopPropagation>
    <span class="close-btn" on:click={closePopup}>&times;</span>
    <slot></slot> <!-- This will render the content passed into the component -->
</div>
