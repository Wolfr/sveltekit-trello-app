<script>

  export let title
  export let desc
  export let data
  export let deleted = false

  import { enhance } from '$app/forms';
  import { invalidateAll } from '$app/navigation';

</script>

{#if !deleted}
<div class="rel-ar">
  <a href={'/'+data.id} class="card">
    <div>
      <h4>{title}</h4>
      <small>{#if desc}{desc}{/if}</small>
    </div>
  </a>
  <form
    action="?/delete"
    method="POST"
    use:enhance={() => {
      return ({ form, result }) => {
        if (result.type === 'success') {
          deleted = true
        }
      };
    }}
  >
    <input type="hidden" name="id" value={data.id}>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      <span class="hide-except-from-screenreader">Delete</span>
    </button>
  </form>
</div>
{/if}

<style>

  .rel-ar {
    position: relative;
  }

  .rel-ar button {
    position: absolute;
    right: 20px;
    top: 16px;
  }

  .card {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #CCC;
    align-items: center;
  }

  button {
    border: none;
    padding: 8px;
    background: none;
    font-size: 16px;
    display: inline-block;
    position: relative;
    z-index: 1;
  }

  a {
    display: block;
    color: #333;
    text-decoration: none;
  }

  .card h4 {
    margin: 0;
  }

</style>
