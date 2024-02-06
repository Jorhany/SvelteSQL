<script>
  import { Server } from "@sveltejs/kit";
  let name = "Jorhany Valverde";
  let title = "Web Developer";
  let skills = ["HTML", "CSS", "JavaScript"];

  let comments = [];
  let commentTitle = "";
  let commentText = "";

  function addComment() {
    if (commentTitle && commentText) {
      comments = [...comments, { title: commentTitle, text: commentText }];
      commentTitle = "";
      commentText = "";
    }
  }
</script>

<main>
  <section class="comments-section">
    <h3>Agregar Usuario</h3>
    <form on:submit|preventDefault={addComment}>
      <label>
        <h3>Usuario</h3>
        <input bind:value={commentTitle} />
      </label>
      <label>
        <h3>Email</h3>
        <input bind:value={commentText} />
      </label>
      <button type="submit">Agregar</button>
    </form>

    <h3>Usuarios</h3>
    <ul>
      {#each comments as { title, text }}
        <li>
          <strong>{title}:</strong>
          {text}
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  .comments-section {
    margin-top: 20px;
  }

  form {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    margin-bottom: 10px;
  }
</style>
