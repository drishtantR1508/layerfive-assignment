from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(first_name="Drishtant",
                          last_name='Rai',
                          email="drishtant.rai2000@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          gender="Male",
                          phone="9876556789",
                          address1='A Dummy address 1',
                          address2='A Dummy address 2',
                          city='Varanasi',
                          zipcode='221005',
                          state='Uttar Pradesh'

                          )
        user.set_password("layerfive@123")
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data)
    ]
