using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElevenNote.Models
{
    public class CategoryCreate
    {
        [Display(Name = "Category")]
        [MaxLength(30, ErrorMessage = "You've entered too many characters")]
        [MinLength(4, ErrorMessage = "Enter a longer name")]
        public string CategoryName { get; set; }
    }
}
