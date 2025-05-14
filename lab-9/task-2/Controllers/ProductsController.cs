using Microsoft.AspNetCore.Mvc;
using OrderManagement.Models;
using System.Collections.Generic;
using System.Linq;

namespace OrderManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public static List<Product> _products = new List<Product>
        {
            new Product { ProductId = 1, Name = "iPhone 15", Price = 999.99m, Category = "Electronics" },
            new Product { ProductId = 2, Name = "Samsung Galaxy Watch", Price = 249.99m, Category = "Wearables" },
            new Product { ProductId = 3, Name = "Nike Air Max", Price = 129.99m, Category = "Footwear" },
            new Product { ProductId = 4, Name = "PlayStation 5", Price = 499.99m, Category = "Gaming" },
            new Product { ProductId = 5, Name = "Kindle Paperwhite", Price = 139.99m, Category = "Electronics" }
        };
        private static int _nextProductId = 6;

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return Ok(_products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = _products.FirstOrDefault(p => p.ProductId == id);
            
            if (product == null)
            {
                return NotFound();
            }
            
            return Ok(product);
        }

        [HttpPost]
        public ActionResult<Product> CreateProduct(Product product)
        {
            product.ProductId = _nextProductId++;
            _products.Add(product);
            
            return CreatedAtAction(nameof(GetProduct), new { id = product.ProductId }, product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product product)
        {
            if (id != product.ProductId)
            {
                return BadRequest();
            }
            
            var existingProduct = _products.FirstOrDefault(p => p.ProductId == id);
            
            if (existingProduct == null)
            {
                return NotFound();
            }
            
            existingProduct.Name = product.Name;
            existingProduct.Price = product.Price;
            existingProduct.Category = product.Category;
            
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _products.FirstOrDefault(p => p.ProductId == id);
            
            if (product == null)
            {
                return NotFound();
            }
            
            _products.Remove(product);
            
            return NoContent();
        }
    }
}