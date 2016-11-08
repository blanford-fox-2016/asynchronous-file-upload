$(document).ready(function() {
    $('#submitButton').on('click', function(e) {
        $('#formulir').ajaxSubmit({
            error: function(res) {
                console.log(`Error: ${res.status}`)
            },
            success: function(res) {
                console.log(res)
                $("#showImg a").attr("href", `http://localhost:3000/images/${res}`)
                $("#showImg img").attr("src", `http://localhost:3000/images/${res}`)
            }
        })
        e.preventDefault();
    })
})
