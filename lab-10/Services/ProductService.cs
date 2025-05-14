using OrderManagement.Models;
using System.Collections.Generic;
using System.Linq;

namespace OrderManagement.Services
{
    public class ProductService : IProductService
    {
        private static List<Product> _products = new List<Product>
        {
            new Product { ProductId = 1, Name = "iPhone 15", Price = 999.99m, Category = "Electronics" },
            new Product { ProductId = 2, Name = "Samsung Galaxy Watch", Price = 249.99m, Category = "Wearables" },
            new Product { ProductId = 3, Name = "Nike Air Max", Price = 129.99m, Category = "Footwear" },
            new Product { ProductId = 4, Name = "PlayStation 5", Price = 499.99m, Category = "Gaming" },
            new Product { ProductId = 5, Name = "Kindle Paperwhite", Price = 139.99m, Category = "Electronics" }
        };
        private static int _nextProductId = 6;

        public IEnumerable<Product> GetAllProducts()
        {
            return _products;
        }

        public Product GetProductById(int id)
        {
            return _products.FirstOrDefault(p => p.ProductId == id);
        }

        public Product AddProduct(Product product)
        {
            product.ProductId = _nextProductId++;
            _products.Add(product);
            return product;
        }

        public bool UpdateProduct(int id, Product product)
        {
            var existingProduct = _products.FirstOrDefault(p => p.ProductId == id);
            
            if (existingProduct == null)
            {
                return false;
            }
            
            existingProduct.Name = product.Name;
            existingProduct.Price = product.Price;
            existingProduct.Category = product.Category;
            
            return true;
        }

        public bool DeleteProduct(int id)
        {
            var product = _products.FirstOrDefault(p => p.ProductId == id);
            
            if (product == null)
            {
                return false;
            }
            
            _products.Remove(product);
            return true;
        }

        public decimal GetTotalPrice()
        {
            if (!_products.Any())
                return 0;

            return _products.Sum(p => p.Price);
        }
    }
}