<template>
    <div class="card">
        <div class="card-body">
            <h5 class="class-title">{{ itemTitle }}</h5>
            <p class="card-text">{{ itemContent }}</p>  
        </div>
    </div>
</template>

<script>
export default {
    props: {'itemTitle': String, 'itemContent': String, "price": Number },
    
};
</script>