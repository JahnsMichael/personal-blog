<script>
    let darkmode = false;

    $: symbol = darkmode ? "🌙" : "😎";
</script>

<button on:click= {() => {darkmode = !darkmode}}>{ symbol }</button>

<style>
    button {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 2em;
        font-size: 2em;
        border: none;
    }
</style>