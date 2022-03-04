<script lang="ts">
  export let id: string,
             title: string,
             description: string,
             redirect: string;
  const params = `noJS&redirect=${redirect}`;
  const apiURL = `/api/todo/${id}`;
</script>
<section>
  <form action="{apiURL}?{params}&_method=patch" method="post">
    <button>Toogle done</button>
  </form>
  <form action="{apiURL}?{params}&_method=patch" method="post">
    <input name="title" value={title} />
    <input name="description" value={description} />
    <button>change</button>
  </form>
  <form action="{apiURL}?{params}&_method=delete" method="post">
    <button>delete</button>
  </form>
</section>
