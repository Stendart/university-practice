<template>
    <div class="footer">
        <div>
            <font-awesome-icon class="footer__icon" icon="bell" size="2x"/>
            <font-awesome-icon class="footer__icon footer__inside_icon" icon="save" size="2x"/>
        </div>
        <div>
            <font-awesome-icon class="footer__icon footer__inside_icon" icon="comments" size="2x"/>
            <font-awesome-icon class="footer__icon" icon="cogs" size="2x"/>
        </div>

    </div>
</template>

<script>

  export default {
    name: "AppFooter"
  }
</script>

<style scoped lang="scss">
    @import '../../variables';
.footer {
    /*padding: 10px;*/

    display: flex;
    justify-content: space-between;
}

    .footer__inside_icon {
        margin: 0 25px;
    }

    .footer__icon {
        color: #9f9d9e;

        &:hover {
            color: $green-color;
        }
    }
</style>
