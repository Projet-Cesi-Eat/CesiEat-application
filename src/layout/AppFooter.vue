<template>
    <footer class="has-cards">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Louis</a>, 
                        <a href="https://www.binarcode.com" target="_blank" rel="noopener">Jailys</a> &
                        <a href="https://www.binarcode.com" target="_blank" rel="noopener">Peter</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a target="_blank" rel="noopener" href="https://github.com/Projet-Cesi-Eat"
                                class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                                data-original-title="Star on Github">
                                <i class="fa fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
 footer{ 
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 130px;
 }
 footer > hr {
    margin-bottom: 0;
 }
</style>
