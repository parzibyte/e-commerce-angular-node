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
