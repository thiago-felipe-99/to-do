<script lang="ts" context="module">
  import type { Todo } from "$lib/interface";

  //@type {import('@sveltejs/kit').Load}
  export async function load({ fetch }) {
    const response = await fetch("/api/todo");
    const json = await response.json() as Todo[];

    return { props: { todos: json } };
  }
</script>

<script lang="ts">
  import Task from "$lib/task.svelte";
  const redirect = "/";

  export let todos:Todo[] = [];
</script>

<main>
  <h1>To Do List</h1>

  <h2>Create Task</h2>
  <form method="post" action="/api/todo?noJS=true&redirect={redirect}">
    <input class="big" placeholder="Title" name="title"/>
    <input placeholder="Description" name="description"/>
    <button>Add</button>
  </form>

  <h2>Tasks</h2>
  <section>
    {#each todos as {id, title, description, done}}
      <Task {id} {title} {description} {done} redirect="/" />
    {/each}
  </section>
</main>

<style lang="scss">
@import 'fluid';
@import 'colors';

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $ternary_color;
}

section {
  @include fluid(gap, $very-small, $large, 10px, 18px ); 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  @include fluid(gap, $very-small, $large, 10px, 18px ); 
  @include fluid(padding, $very-small, $large, 10px, 18px ); 

  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
