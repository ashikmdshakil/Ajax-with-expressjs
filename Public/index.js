var jq = $.noConflict();
jq(document).ready(function(){    
        jq.get('/fetch',function(student, status){
            jq.each(student ,function(i, student){
                var row = "";
                row += '<tr>';
                row +=  '<td>'+student.name+'</td>';
                row +=  '<td>'+student.studentid+'</td>';
                row += '<td>'+student.department+'</td>';
                row += '<input type = "hidden" disabled value ='+student.id+'>';
                row +='<td><button class="btn btn-primary deleteRow" type="submit">delete</button></td>';
                row += '</tr>'
                jq('#createRow').append(row);
            })
           
        })
        jq(document).on('click' , '.deleteRow' , function(){
            var id = jq(this).parent().siblings('input').val();
            jq.ajax({
                url : '/remove',
                type : 'post',
                data : {studentId : id}
            })
            jq(this).closest('tr').remove();  
        })
        
});