using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Payments.Models
{
    public class Sections
    {
        [Key]
        public int SectionId { get; set; }
        public string SectionName { get; set; }
        public bool IsDefault { get; set; }
        public bool IsActive { get; set; }


        public int FormId { get; set; }
        public virtual Forms Forms { get; set; }
    }
}
