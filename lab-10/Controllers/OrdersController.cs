using Microsoft.AspNetCore.Mvc;
using OrderManagement.Models;
using OrderManagement.Services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OrderManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IProductService _productService;
        private static List<Order> _orders = new List<Order>
        {
            new Order 
            { 
                OrderId = 1, 
                CustomerName = "John Doe", 
                OrderDate = DateTime.Now.AddDays(-5), 
                TotalAmount = 1249.98m,
                Products = new List<Product>
                {
                    null,
                    null
                }
            },
            new Order 
            { 
                OrderId = 2, 
                CustomerName = "Jane Smith", 
                OrderDate = DateTime.Now.AddDays(-3), 
                TotalAmount = 629.98m,
                Products = new List<Product>
                {
                    null,
                    null
                }
            }
        };
        private static int _nextOrderId = 3;

        public OrdersController(IProductService productService)
        {
            _productService = productService;
            
            if (_orders[0].Products[0] == null)
            {
                _orders[0].Products.Clear();
                _orders[0].Products.Add(_productService.GetProductById(1));
                _orders[0].Products.Add(_productService.GetProductById(2));
            }
            
            if (_orders[1].Products[0] == null)
            {
                _orders[1].Products.Clear();
                _orders[1].Products.Add(_productService.GetProductById(3));
                _orders[1].Products.Add(_productService.GetProductById(5));
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetOrders()
        {
            return Ok(_orders);
        }

        [HttpGet("{id}")]
        public ActionResult<Order> GetOrder(int id)
        {
            var order = _orders.FirstOrDefault(o => o.OrderId == id);
            
            if (order == null)
            {
                return NotFound();
            }
            
            return Ok(order);
        }

        [HttpPost]
        public ActionResult<Order> CreateOrder(Order orderRequest)
        {
            List<Product> fullProducts = new List<Product>();
            
            foreach (var product in orderRequest.Products)
            {
                var existingProduct = _productService.GetProductById(product.ProductId);
                if (existingProduct == null)
                {
                    return BadRequest($"Product with ID {product.ProductId} not found");
                }
                fullProducts.Add(existingProduct);
            }
            
            Order order = new Order
            {
                CustomerName = orderRequest.CustomerName,
                OrderDate = orderRequest.OrderDate,
                TotalAmount = orderRequest.TotalAmount,
                Products = fullProducts
            };
            
            order.OrderId = _nextOrderId++;
            _orders.Add(order);
            
            return CreatedAtAction(nameof(GetOrder), new { id = order.OrderId }, order);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, Order order)
        {
            if (id != order.OrderId)
            {
                return BadRequest();
            }
            
            var existingOrder = _orders.FirstOrDefault(o => o.OrderId == id);
            
            if (existingOrder == null)
            {
                return NotFound();
            }

            if (order.Products == null || !order.Products.Any())
            {
                return BadRequest("At least one product must be included in the order.");
            }

            foreach (var product in order.Products)
            {
                var existingProduct = _productService.GetProductById(product.ProductId);
                if (existingProduct == null)
                {
                    return BadRequest($"Product with ID {product.ProductId} does not exist.");
                }

                int index = order.Products.IndexOf(product);
                order.Products[index] = existingProduct;
            }
            
            existingOrder.CustomerName = order.CustomerName;
            existingOrder.OrderDate = order.OrderDate;
            existingOrder.TotalAmount = order.TotalAmount;
            existingOrder.Products = order.Products;
            
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            var order = _orders.FirstOrDefault(o => o.OrderId == id);
            
            if (order == null)
            {
                return NotFound();
            }
            
            _orders.Remove(order);
            
            return NoContent();
        }
    }
}