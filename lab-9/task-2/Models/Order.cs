using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OrderManagement.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        
        [Required]
        [MaxLength(100)]
        public string CustomerName { get; set; }
        
        [Required]
        public DateTime OrderDate { get; set; }
        
        [Required]
        [Range(1, 5000)]
        public decimal TotalAmount { get; set; }
        
        [Required]
        public List<Product> Products { get; set; } = new List<Product>();
    }
}