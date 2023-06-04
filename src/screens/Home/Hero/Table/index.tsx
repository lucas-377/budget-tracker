/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { InputNumber, InputNumberChangeEvent } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';

import * as S from '../../../../../styles/shared';

interface Product {
  id: string | null;
  name: string;
  description: string;
  date: string;
  price: number;
  category: string | null;
  status: string;
}

export default function Table() {
  const emptyProduct: Product = {
    id: null,
    name: '',
    description: '',
    category: null,
    price: 0,
    date: new Date().toDateString(),
    status: 'UNPAID',
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [productDialog, setProductDialog] = useState<boolean>(false);
  const [deleteProductDialog, setDeleteProductDialog] =
    useState<boolean>(false);
  const [product, setProduct] = useState<Product>(emptyProduct);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<Product[]>>(null);

  useEffect(() => {
    setProducts([
      {
        id: '1',
        name: 'Conta de Luz',
        description: 'Product Description',
        price: 80,
        category: 'Casa',
        status: 'PAID',
        date: '10/06/2023',
      },
      {
        id: '2',
        name: 'Conta de Água',
        description: 'Product Description',
        price: 50,
        category: 'Casa',
        status: 'UNPAID',
        date: '10/06/2023',
      },
      {
        id: '3',
        name: 'IPTU',
        description: 'Product Description',
        price: 253,
        category: 'Casa',
        status: 'LATE',
        date: '10/06/2023',
      },
      {
        id: '4',
        name: 'Diarista',
        description: 'Product Description',
        price: 200,
        category: 'Casa',
        status: 'PAID',
        date: '10/06/2023',
      },
      {
        id: '5',
        name: 'Salário',
        description: 'Product Description',
        price: 2530,
        category: 'Salário',
        status: 'PAID',
        date: '10/06/2023',
      },
      {
        id: '6',
        name: 'Gás',
        description: 'Product Description',
        price: 99,
        category: 'Casa',
        status: 'UNPAID',
        date: '10/06/2023',
      },
      {
        id: '7',
        name: 'Internet',
        description: 'Product Description',
        price: 100,
        category: 'Casa',
        status: 'PAID',
        date: '10/06/2023',
      },
      {
        id: '8',
        name: 'Telefone',
        description: 'Product Description',
        price: 42.5,
        category: 'Pessoal',
        status: 'UNPAID',
        date: '10/06/2023',
      },
      {
        id: '9',
        name: 'Barbearia',
        description: 'Product Description',
        price: 45,
        category: 'Pessoal',
        status: 'PAID',
        date: '10/06/2023',
      },
      {
        id: '10',
        name: 'Lava-Car',
        description: 'Product Description',
        price: 50,
        category: 'Carro',
        status: 'PAID',
        date: '10/06/2023',
      },
      {
        id: '11',
        name: 'Tesouro Direto',
        description: 'Product Description',
        price: 376,
        category: 'Investimento',
        status: 'LATE',
        date: '10/06/2023',
      },
    ]);
    // ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  const onCategoryChange = (e: RadioButtonChangeEvent) => {
    const _product = { ...product };

    _product.category = e.value;
    setProduct(_product);
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    const val = (e.target && e.target.value) || '';
    const _product = { ...product };

    // @ts-ignore
    _product[`${name}`] = val;

    setProduct(_product);
  };

  const onInputNumberChange = (e: InputNumberChangeEvent, name: string) => {
    const val = e.value || 0;
    const _product = { ...product };

    // @ts-ignore
    _product[`${name}`] = val;

    setProduct(_product);
  };

  const rightToolbarTemplate = () => (
    <Button
      label="Exportar"
      icon="pi pi-upload"
      className="p-button-secondary"
      onClick={exportCSV}
    />
  );

  const getSeverity = (product: Product) => {
    switch (product.status) {
      case 'PAID':
        return 'success';

      case 'UNPAID':
        return 'warning';

      case 'LATE':
        return 'danger';

      default:
        return null;
    }
  };

  const severityLabel = (product: Product) => {
    switch (product.status) {
      case 'PAID':
        return 'PAGO';

      case 'UNPAID':
        return 'NÃO PAGO';

      case 'LATE':
        return 'ATRASADO';

      default:
        return null;
    }
  };

  const valueBodyTemplate = (rowData: Product) =>
    rowData.price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  const statusBodyTemplate = (rowData: Product) => (
    <Tag
      rounded
      value={severityLabel(rowData)}
      severity={getSeverity(rowData)}
    />
  );

  const actionBodyTemplate = () => (
    <>
      <Button icon="pi pi-pencil" rounded outlined className="mr-2" />
      <Button icon="pi pi-trash" rounded outlined severity="danger" />
    </>
  );

  const productDialogFooter = (
    <>
      <Button label="Cancel" icon="pi pi-times" outlined />
      <Button label="Save" icon="pi pi-check" />
    </>
  );

  const deleteProductDialogFooter = (
    <>
      <Button label="No" icon="pi pi-times" outlined />
      <Button label="Yes" icon="pi pi-check" severity="danger" />
    </>
  );

  return (
    <div className="container">
      <div className="grid">
        <div className="col-12">
          <Toast ref={toast} />
          <S.Card>
            <Toolbar
              start={<S.Title>Lançamentos</S.Title>}
              end={rightToolbarTemplate}
            />

            <DataTable
              ref={dt}
              value={products}
              dataKey="id"
              paginator={products.length > 10}
              rows={10}
              rowsPerPageOptions={[10, 20, 30]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="{first}-{last} de {totalRecords}"
              removableSort
            >
              <Column
                field="name"
                header="Nome"
                style={{ minWidth: '12rem' }}
              />

              <Column
                field="price"
                header="Valor"
                body={valueBodyTemplate}
                sortable
                style={{ minWidth: '1rem' }}
              />

              <Column
                field="date"
                header="Data"
                sortable
                style={{ minWidth: '1rem' }}
              />

              <Column
                field="category"
                header="Categoria"
                sortable
                style={{ minWidth: '12rem' }}
              />

              <Column
                field="inventoryStatus"
                header="Status"
                body={statusBodyTemplate}
                sortable
                style={{ minWidth: '1rem' }}
              />

              <Column
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: '1rem' }}
              />
            </DataTable>
          </S.Card>
        </div>
      </div>

      <Dialog
        visible={productDialog}
        style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header="Product Details"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        {product.image && (
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.image}
            className="product-image block m-auto pb-3"
          />
        )}
        <div className="field">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <InputText
            id="name"
            value={product.name}
            onChange={(e) => onInputChange(e, 'name')}
            required
            autoFocus
            className={classNames({ 'p-invalid': submitted && !product.name })}
          />
          {submitted && !product.name && (
            <small className="p-error">Name is required.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="description" className="font-bold">
            Description
          </label>
          <InputTextarea
            id="description"
            value={product.description}
            onChange={(e) => onInputChange(e, 'description')}
            required
            rows={3}
            cols={20}
          />
        </div>

        <div className="field">
          <label className="mb-3 font-bold">Category</label>
          <div className="formgrid grid">
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category1"
                name="category"
                value="Accessories"
                onChange={onCategoryChange}
                checked={product.category === 'Accessories'}
              />
              <label htmlFor="category1">Accessories</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category2"
                name="category"
                value="Clothing"
                onChange={onCategoryChange}
                checked={product.category === 'Clothing'}
              />
              <label htmlFor="category2">Clothing</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category3"
                name="category"
                value="Electronics"
                onChange={onCategoryChange}
                checked={product.category === 'Electronics'}
              />
              <label htmlFor="category3">Electronics</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category4"
                name="category"
                value="Fitness"
                onChange={onCategoryChange}
                checked={product.category === 'Fitness'}
              />
              <label htmlFor="category4">Fitness</label>
            </div>
          </div>
        </div>

        <div className="formgrid grid">
          <div className="field col">
            <label htmlFor="price" className="font-bold">
              Price
            </label>
            <InputNumber
              id="price"
              value={product.price}
              onValueChange={(e) => onInputNumberChange(e, 'price')}
              mode="currency"
              currency="USD"
              locale="en-US"
            />
          </div>
          <div className="field col">
            <label htmlFor="quantity" className="font-bold">
              Quantity
            </label>
            <InputNumber
              id="quantity"
              value={product.quantity}
              onValueChange={(e) => onInputNumberChange(e, 'quantity')}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header="Confirm"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: '2rem' }}
          />
          {product && (
            <span>
              Are you sure you want to delete <b>{product.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
}
