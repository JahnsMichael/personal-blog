<script>
  export let name, image_url, role, age, gender, location, quote;
</script>

<div class="wrapper">
  <div class="center">
    <img src={image_url} alt="some random person for example" />
    <h2 id="name">{name}</h2>
    <p id="role"><em>{role}</em></p>
  </div>
  <div id="desc" class="center">
    <h2>Deskripsi</h2>
    <div>Umur: {age}</div>
    <div>Gender: {gender}</div>
    <div>Asal Wilayah: {location}</div>
  </div>
  <div id="quotes" class="col">
    <h2>Quotes</h2>
    <blockquote>
      {quote}
    </blockquote>
  </div>
</div>

<style>
  .wrapper {
    border: solid 2px var(--theme-primary);
    border-radius: 2px;
    padding: 1em;
    margin: 10px 0;
  }

  .center {
    text-align: center;
  }

  #name {
    margin-bottom: 1px;
  }

  #role {
    margin-top: 1px;
  }

  img {
    width: 15em;
    clip-path: circle(5em at center);
  }
</style>
