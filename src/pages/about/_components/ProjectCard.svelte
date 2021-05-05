<script>
  export let projectName, desc, stacks, appLink, repoLink;
</script>

<div id="wrapper">
  <p id="projectName">{projectName}</p>
  <p id="desc">{desc}</p>
  <div id="stacks">
    Tech Stacks: &nbsp; &nbsp;
    {#each stacks as stack}
      <div class="stack">
        <strong>{stack}</strong>
      </div>
    {/each}
  </div>
  <div class="links">
    <a class="link" href={appLink}>Link to App</a>
    <a class="link" href={repoLink}>Link to Repo</a>
  </div>
</div>

<style>
  #wrapper {
    border: 2px solid var(--theme-primary);
    padding: 1em;
    border-radius: 0.5em;
    margin: 1em 0;
  }

  #projectName {
    margin-bottom: 0.25em;
  }

  #desc {
    border-bottom: 2px solid var(--theme-primary);
  }

  #projectName {
    font-size: 2em;
    color: var(--theme-primary);
  }

  #stacks {
    display: flex;
    flex-wrap: wrap;
  }
  .stack {
    background-color: var(--theme-blue);
    padding: 0.25em 0.5em;
    font-size: 0.75em;
    font-style: bold;
    border-radius: 2em;
    margin: 3px;
  }

  .stack > strong {
    color: var(--theme-text);
  }

  .links {
    margin: 1em;
  }
</style>
