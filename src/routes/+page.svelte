<script>
  import Card from '../lib/components/Card.svelte';
  import Loader from '../lib/components/Loader.svelte';
  export let data
</script>

<div class="main">
  <div class="header">
    <div class="left-accessory"></div>
    <h3>Todos</h3>
    <div class="right-accessory">
      <a href="/add" class="action">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        Add todo
      </a>
    </div>
  </div>

  <div class="content-view">
    {#each data.items as item}
     <Card
        title={item.name}
        desc={item.desc.substring(0,100)}
        data={item}
      />
    {/each}
  </div>
</div>