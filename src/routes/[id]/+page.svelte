<script>
  export let data
</script>

<div class="main">
  <div class="header">
    <div class="left-accessory">
      <a href="/" class="action back">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        Back
      </a>
    </div>
  
    <h3 style="text-align: center;">
      {data.item.name}
    </h3>

    <div class="right-accessory"></div>

  </div>

  <div class="content-view padded">
      {#if data.item.desc}{@html data.item.desc}{:else}No description{/if}
  </div>
</div>
