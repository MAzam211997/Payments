using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Payments.Models
{
    public class Forms
    {
        [Key]
        public int FormId { get; set; }
        public string FormName { get; set; }
    }
}
