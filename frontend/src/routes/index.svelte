<script lang="ts">
  import Task from "$lib/task.svelte";
  const redirect = "/";
</script>

<h1>To Do List</h1>

<form method="post" action="/api/todo&noJS&redirect={redirect}">
  <input placeholder="Add a new task" name="title"/>
  <input placeholder="Description of taks" name="description"/>
  <button>send</button>
</form>

<Task id="1" title="teste" description="qualquer" redirect="/" />
<Task id="2" title="teste" description="qualquer" redirect="/" />
<Task id="3" title="teste" description="qualquer" redirect="/" />
