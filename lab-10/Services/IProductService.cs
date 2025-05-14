using OrderManagement.Models;
using System.Collections.Generic;

namespace OrderManagement.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
        Product AddProduct(Product product);
        bool UpdateProduct(int id, Product product);
        bool DeleteProduct(int id);
        decimal GetTotalPrice();
    }
}