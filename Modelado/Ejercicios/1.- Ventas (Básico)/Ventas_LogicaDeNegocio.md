# 1, 2, 4, 5, 6 y 7:

## Clientes (CRUD) **ED**

- id_cliente: int **PK**
- nombre_cliente: varchar[50]
- apellido_cliente: varchar[50]
- teléfono: varchar[20] **UQ**
- email: varchar[50] **UQ**

## Productos (CRUD) **ED|EC**

- id_producto: int **PK**
- nombre_producto: varchar[50]
- descripción_producto: varchar[500]
- precio_producto: decimal[10,2]
- cantidad_disponible_producto: int

## Ventas (CRU) **ED**

- id_venta: int **PK**
- id_cliente: int **FK**
- id_estado: int **FK**
- monto_venta: decimal
- fecha_venta: date

## Direcciones (CRUD) **EC**

- id_direccion: int **PK**
- calle_avenida: varchar[500]
- ciudad: varchar[50]
- pais: varchar[50]
- dominio_país: varchar[10]
- id_cliente: int **FK**

## Detalle_Venta (CRU) **EP**

- id_venta: int **PK|FK**
- id_producto: int **PK|FK**
- cantidad_producto: int
- precio_venta: decimal[10,2]

## ESTADO_VENTA **EC** (CRUD)

- id_estado: int **PK**
- nombre: varchar[20]

# 8 Relaciones:

1. Un **cliente** tiene **direcciones** (1 - M)
2. Un **cliente** hace **ventas** (1 - M)
3. Una **venta** tiene **estados** (1 - M)
4. Una **venta** tiene **detalles** (1 - M)
5. Un **producto** aparece en **detalles** (1 - M)
