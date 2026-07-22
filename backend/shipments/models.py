from django.db import models

from django.db import models


class Shipment(models.Model):

    class Status(models.TextChoices):
        CREATED = "CREATED", "Creado"
        PICKED_UP = "PICKED_UP", "Recogido"
        IN_TRANSIT = "IN_TRANSIT", "En tránsito"
        OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY", "En reparto"
        RETURNED = "RETURNED", "Devuelto"
        DELIVERED = "DELIVERED", "Entregado"


    guide_number = models.CharField(
        max_length=50,
        unique=True
    )

    customer = models.CharField(
        max_length=100
    )

    origin = models.CharField(
        max_length=100
    )

    destination = models.CharField(
        max_length=100
    )

    status = models.CharField(
        max_length=30,
        choices=Status.choices,
        default=Status.CREATED
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )


    def __str__(self):
        return self.guide_number



class TrackingEvent(models.Model):

    shipment = models.ForeignKey(
        Shipment,
        related_name="tracking_events",
        on_delete=models.CASCADE
    )

    status = models.CharField(
        max_length=30
    )

    location = models.CharField(
        max_length=100
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )


    def __str__(self):
        return f"{self.shipment.guide_number} - {self.status}"