create table productos(
id bigint unsigned not null auto_increment primary key,
nombre varchar(255) not null,
descripcion varchar(1024) not null,
precio decimal(9,2) not null
);


create table fotos_productos(
id_producto bigint unsigned not null,
foto varchar(255) not null,
foreign key(id_producto) references productos(id) on delete cascade on update cascade
);


create table clientes(
id bigint unsigned not null auto_increment primary key,
nombre varchar(255) not null,
direccion varchar(255) not null
);

create table ventas(
id bigint unsigned not null auto_increment primary key,
id_cliente bigint unsigned not null,
total decimal(9,2) not null,
foreign key(id_cliente) references clientes(id) on delete cascade on update cascade
);

create table productos_vendidos(
id_venta bigint unsigned not null,
id_producto bigint unsigned not null,
foreign key(id_venta) references ventas(id) on delete cascade on update cascade,
foreign key(id_producto) references productos(id) on delete cascade on update cascade
);
