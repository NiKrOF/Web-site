function getCookie(name) {
            let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        $(document).ready(function () {
            $("#save-city").on("click", function () {
                let getCity = $('#city').val();
                document.cookie = 'city=' + getCity;
                $('#exampleModal').modal('hide');
                $("#city-picker").text(getCity);
            });
            let cookie = getCookie('city');
            if (cookie === undefined) {
                $('#exampleModal').modal('show');
            } else {
                $("#city-picker").text(cookie);
            }
        })