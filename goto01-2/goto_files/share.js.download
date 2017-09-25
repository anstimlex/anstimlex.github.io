(function() {

  window.Share = {
    init: function() {
      var self = this;

      var dim = document.getElementById('dim-lights');

      dim && dim.addEventListener('click', function(e) {
        self.toggleDim();
      })

      var toggles = document.querySelectorAll('.toggle-buttons');
      for(var i = 0; i < toggles.length; i++) {
        this.initToggle(toggles[i]);
      }

      var pt = document.querySelector('#platform-toggle');
      pt && pt.addEventListener('change', function(e) {
        document.body.classList.remove('preview-ios');
        document.body.classList.remove('preview-android');
        document.body.classList.add('preview-' + e.detail)

        self.updateFrame(e.detail);
      })

    },

    updateFrame: function(platform) {
      var f = document.getElementById('mainframe');
      var fs = f.src;
      fs = fs.replace('?ionicplatform=ios&iconset='+window.load_iconset, '');
      fs = fs.replace('?ionicplatform=android&iconset='+window.load_iconset, '');
      f.src = fs + '?ionicplatform=' + platform + '&iconset='+window.load_iconset;
    },

    initToggle: function(t) {
      t.addEventListener('click', function(e) {
        var b = t.querySelectorAll('.toggle-button');
        for(var i = 0; i < b.length; i++) {
          b[i].classList.remove('active');
        }
        e.target.classList.add('active');

        var e = new CustomEvent('change', {
          'detail': e.target.getAttribute('data-value')
        });
        t.dispatchEvent(e);
      })
    },
    toggleDim: function() {
      var body = document.querySelector('body');
      if(body.classList.contains('dim')) {
        body.classList.remove('dim');
      } else {
        body.classList.add('dim');
      }
    }
  }

  window.Share.init();
})();
