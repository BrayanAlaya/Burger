import { Component } from '@angular/core';
import { Sale } from '../../models/Sale.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-dash',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sales-dash.component.html',
  styleUrl: './sales-dash.component.scss'
})
export class SalesDashComponent {
  searchTerm = '';
  selectedDateRange = 'week';
  startDate = '';
  endDate = '';
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;

  // Mock data - replace with actual data service
  allSales: Sale[] = [
    {
      id: 'S001',
      burgerName: 'Classic Cheese',
      quantity: 2,
      totalPrice: 15.98,
      date: new Date('2024-11-09T10:30:00'),
      customer: 'John Doe',
      paymentMethod: 'Yape'
    },
    {
      id: 'S002',
      burgerName: 'Bacon Deluxe',
      quantity: 1,
      totalPrice: 9.99,
      date: new Date('2024-11-09T11:45:00'),
      customer: 'Ana Pérez',
      paymentMethod: 'Tarjeta de Crédito'
    },
    {
      id: 'S003',
      burgerName: 'Vegan Supreme',
      quantity: 3,
      totalPrice: 20.97,
      date: new Date('2024-11-09T12:10:00'),
      customer: 'Carlos Sánchez',
      paymentMethod: 'Tarjeta de Débito'
    },
    {
      id: 'S004',
      burgerName: 'Cheese Lover',
      quantity: 1,
      totalPrice: 7.99,
      date: new Date('2024-11-09T13:00:00'),
      customer: 'María García',
      paymentMethod: 'Yape'
    },
    {
      id: 'S005',
      burgerName: 'BBQ Bacon',
      quantity: 2,
      totalPrice: 18.98,
      date: new Date('2024-11-09T14:15:00'),
      customer: 'Luis Martínez',
      paymentMethod: 'Tarjeta de Crédito'
    },
    {
      id: 'S006',
      burgerName: 'Mushroom Swiss',
      quantity: 1,
      totalPrice: 8.49,
      date: new Date('2024-11-09T15:30:00'),
      customer: 'Lucía López',
      paymentMethod: 'Tarjeta de Débito'
    },
    {
      id: 'S007',
      burgerName: 'Spicy Jalapeño',
      quantity: 2,
      totalPrice: 16.58,
      date: new Date('2024-11-09T16:20:00'),
      customer: 'Pedro Fernández',
      paymentMethod: 'Yape'
    },
    {
      id: 'S008',
      burgerName: 'Avocado Bacon',
      quantity: 1,
      totalPrice: 11.49,
      date: new Date('2024-11-09T17:00:00'),
      customer: 'Sofia Ramírez',
      paymentMethod: 'Tarjeta de Crédito'
    },
    {
      id: 'S009',
      burgerName: 'Cheddar BBQ',
      quantity: 3,
      totalPrice: 26.97,
      date: new Date('2024-11-09T18:30:00'),
      customer: 'José Pérez',
      paymentMethod: 'Tarjeta de Débito'
    },
    {
      id: 'S010',
      burgerName: 'Double Bacon Cheese',
      quantity: 1,
      totalPrice: 10.99,
      date: new Date('2024-11-09T19:15:00'),
      customer: 'Esteban Gómez',
      paymentMethod: 'Yape'
    }


  ];

  displayedSales: Sale[] = [];

  ngOnInit() {
    this.filterSales();
  }

  filterSales() {
    let filtered = this.allSales;

    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      filtered = filtered.filter(sale =>
        sale.burgerName.toLowerCase().includes(search) ||
        sale.customer?.toLowerCase().includes(search)
      );
    }

    if (this.selectedDateRange === 'custom' && this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      filtered = filtered.filter(sale =>
        sale.date >= start && sale.date <= end
      );
    }

    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedSales = filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  filterByDate() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (this.selectedDateRange) {
      case 'today':
        this.startDate = today.toISOString().split('T')[0];
        this.endDate = now.toISOString().split('T')[0];
        break;
      case 'week':
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        this.startDate = weekAgo.toISOString().split('T')[0];
        this.endDate = now.toISOString().split('T')[0];
        break;
      case 'month':
        const monthAgo = new Date(today);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        this.startDate = monthAgo.toISOString().split('T')[0];
        this.endDate = now.toISOString().split('T')[0];
        break;
    }

    this.filterSales();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.filterSales();
  }

  exportToCsv() {
    const headers = ['Sale ID', 'Burger Name', 'Quantity', 'Total Price', 'Date', 'Customer', 'Payment Method'];
    const csvData = this.displayedSales.map(sale => [
      sale.id,
      sale.burgerName,
      sale.quantity,
      sale.totalPrice,
      new Date(sale.date).toLocaleString(),
      sale.customer || 'N/A',
      sale.paymentMethod
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sales-history-${new Date().toISOString()}.csv`;
    link.click();
  }
}
