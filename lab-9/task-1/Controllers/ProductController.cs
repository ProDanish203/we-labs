using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using WeLab9.Models;

namespace WeLab9.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private static List<Product> _products = new List<Product>
        {
            new Product { Id = 1, Name = "iPhone 15", Price = 999.99m, Category = "Electronics" },
            new Product { Id = 2, Name = "Samsung Galaxy Watch", Price = 249.99m, Category = "Wearables" },
            new Product { Id = 3, Name = "PlayStation 5", Price = 499.99m, Category = "Gaming" },
        };
        private static int _nextId = 4;

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return Ok(_products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = _products.FirstOrDefault(p => p.Id == id);
            
            if (product == null)
            {
                return NotFound();
            }
            
            return Ok(product);
        }

        [HttpPost]
        public ActionResult<Product> CreateProduct(Product product)
        {
            product.Id = _nextId++;
            _products.Add(product);
            
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            
            var existingProduct = _products.FirstOrDefault(p => p.Id == id);
            
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
            var product = _products.FirstOrDefault(p => p.Id == id);
            
            if (product == null)
            {
                return NotFound();
            }
            
            _products.Remove(product);
            
            return NoContent();
        }
    }
}