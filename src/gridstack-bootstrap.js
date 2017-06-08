$(document).ready(function () {

    $.ui.plugin.add( "resizable", "bootstrapGrid", {

        start: function() {
            this.cols = 1;
            this.oldClass = "";
            var classList = this[0].className.split(/\s+/);
            for (var i = 0; i < classList.length; i++) {
                var match = classList[i].match(/col-md-(.*)/i);
                if (match) {
                    this.cols = parseInt(match[1]);
                    this.oldClass = classList[i];
                }
            }
            this.ppc = Math.floor(this[0].offsetWidth / this.cols);
        },

        stop: function() {
            console.log('stop');
        },

        resize: function() {

            var that = $( this ).resizable( "instance" ),
                cs = that.size,
                os = that.originalSize,
                ox = cs.width - os.width;

            var col = Math.round(ox / this.ppc);
            var newCols = this.cols + col > 0 ? this.cols + col : 1;
            var newClass = "col-md-" + newCols;

            $(this).removeClass(this.oldClass).addClass(newClass);
            this.oldClass = newClass;

            that.size.width = os.width;
            that.size.height = os.height;
        }

    } );

});
