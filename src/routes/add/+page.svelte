<script>
  import { enhance } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
	import { fade } from "svelte/transition"
	
  let cardTitle
  let cardContent = null
  let result
  let success

  export let form

  $: if (success) { setTimeout(() => { success = false; }, 1000)}
</script>

<style>
  
  textarea {
    height: 60vh;
  }

</style>


<form
  action="?/add"
  method="POST"
  use:enhance={() => {
    return ({ form, result }) => {
      if (result.type === 'success') {
        success = true
      }
    };
  }}
>

  <div class="main">
    <div class="header">
      <div class="left-accessory">
        <a href="/" class="action close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          Close
        </a>
      </div>
      <h3>Add todo</h3>
      <div class="right-accessory">
        <button class="action">
          Save
        </button>
      </div>
    </div>

    <div class="content-view padded">
      <div class="form-field">
        <label for="cardTitle">Title</label>
        <input name="name" minlength="1" bind:value={cardTitle} id="cardTitle">
      </div>
      <div class="form-field">
        <label for="cardContent">Description</label>
        <textarea id="cardContent" name="desc" minlength="1" bind:value={cardContent} />
      </div>

    </div>
  </div>
  
</form>
{#if success}
  <p
    class="success-toast"
    in:fade={{ duration: 150 }}
    out:fade={{ duration: 350 }}
    >
    Saved
  </p>
{/if}