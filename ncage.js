//nCage
(function ($) {

    var self = {
        nCageImgs: [
          "https://cdn2.vox-cdn.com/thumbor/4rIUVqF658tvS5rnVqpHDID-LWE=/0x64:1513x915/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/46147648/batman-glow.0.0.jpg",
"http://cdn.screenrant.com/wp-content/uploads/Ben-Affleck-on-Difference-Between-His-Batman-and-Christian-Bale.jpg",
"http://assets1.ignimgs.com/vid/thumbnails/user/2013/10/24/ImBatman.jpg",
"http://upload.wikimedia.org/wikipedia/en/0/0b/Batman_the_Animated_Series_logo.jpg",
"http://images.hellokids.com/_uploads/_tiny_galerie/20130624/batman_ume.jpg",
"http://www.fulldead.com.br/uploads/subgenero/batman--201411201416564.jpg",
"http://vignette4.wikia.nocookie.net/batman/images/3/3e/Arkhamcity-Batman-Gotham.jpg/revision/latest?cb=20140613135726",
"http://batman-news.com/wp-content/uploads/2014/02/Batman-Arkham-Unlockable-Moves-Attacks-and-Combos.jpg",
"http://oyster.ignimgs.com/wordpress/stg.ign.com/2014/12/batman-the-brave-and-the-bold-pictures-20081106115546154_640w3.jpg",
"http://fc01.deviantart.net/fs44/f/2009/091/f/b/Batman_over_Barcelona_by_jimlee00.jpg",
"http://img1.wikia.nocookie.net/__cb20120604080057/marvel_dc/images/8/87/LEGO_Batman.jpg",
"https://rcbxpersonalizados.files.wordpress.com/2013/12/batman-07-ellite-design.png",
"http://cartoondistrict.com/wp-content/uploads/2014/07/Batman-HD-Wallpapers-for-Desktop-3.jpg",
"http://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2011/02/BatmanDYT.jpg",
"http://vignette4.wikia.nocookie.net/batman/images/3/36/40_Classic_Batman-logo.gif/revision/latest?cb=20130811102236",
"http://upload.wikimedia.org/wikipedia/commons/b/b4/Adam_West_Batman_1965.JPG",
"http://s3.ktkbr.com.br.s3-sa-east-1.amazonaws.com/wp-content/blogs.dir/11/files/2013/09/original16.jpg",
"http://i1.r7.com/data/files/2C95/948E/3DE7/E8D6/013D/EAFD/FA66/7345/2%20-%20batman%20adam%20west%20tumblr.jpg",
"https://terrademordor.files.wordpress.com/2011/07/12.jpg",
"http://garotasgeeks.com/wp-content/uploads/2012/10/mark-wayne-williams.jpg",
"http://2.bp.blogspot.com/-L5mAY35Flds/UeoUsgL8ssI/AAAAAAAABLU/vVsT6wOePFE/s1600/batfail.jpg",
"http://cospobre.com/wp-content/uploads/2013/09/mini-29.jpg",
"http://melhoresdomundo.net/wp-content/uploads/2015/01/batman-beyond-return-of-the-joker-batman-terry2.jpg",
"http://fc00.deviantart.net/fs70/i/2013/104/0/d/little___batman_beyond_by_chickenzpunk-d61o6qe.jpg",
"http://static.comicvine.com/uploads/scale_small/11111/111113908/2996144-27641559.jpg",
"http://www.6istitutocomprensivopadova.gov.it/morante/libretti%20quarta%20A/batman/attrezzi2.jpg",
"http://static1.businessinsider.com/image/50096b936bb3f7b852000019-960/batman-the-dark-knight-rises.jpg",
"http://cdn.screenrant.com/wp-content/uploads/Dark-Knight-Rises-Batman-Christian-Bale.jpeg",
"http://gamingsquid.com/wp-content/uploads/2012/10/worst-batman-costume-fat-batman.jpg",
"http://unrealitymag.bcmediagroup.netdna-cdn.com/wp-content/uploads/2009/09/fat-batman.jpg"
        ],
        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        self.handleImg(item, lstImgs);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                self.handleImg(item, lstImgs);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },
        handleImg: function (item, lstImgs) {
            $(item).error(function () {
                //Handle broken imgs
                self.handleBrokenImg(item, lstImgs);
            });

            self.setRandomImg(item, lstImgs);
        },
        setRandomImg: function (item, lstImgs) {
            var h = $(item).height();
            var w = $(item).width();
            $(item).css('width', w + 'px').css('height', h + 'px');
            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
        },
        handleBrokenImg: function (item, lstImgs) {

            var brokenImg = $(item).attr('src');
            var index = lstImgs.indexOf(brokenImg);
            if (index > -1) {
                lstImgs.splice(index, 1);
            }
            self.setRandomImg(item, lstImgs);
        },
    };

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nCageImgs, 3000);
    });

    //Set global variable
    $.nCage = self;

})(jQuery);
