from django.db import models


class Contact(models.Model):
    name = models.CharField("Nome", max_length=100)
    email = models.EmailField("E-mail")
    phone = models.CharField("Telefone", max_length=20)
    creation = models.DateTimeField("Criação", auto_now_add=True)

    def __str__(self):
        return self.name
