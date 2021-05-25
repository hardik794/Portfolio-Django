from django.db import models
# Create your models here.

class BasicDetails(models.Model):
    id=models.AutoField(primary_key=True)
    Name=models.CharField(max_length=100)
    Email=models.CharField(max_length=100)
    Phone=models.CharField(max_length=100)
    City=models.CharField(max_length=100)
    State=models.CharField(max_length=100)
    Country=models.CharField(max_length=100)
    BirthDate=models.DateField()
    Github = models.URLField(max_length = 200)
    Linkdein = models.URLField(max_length = 200)
    Youtube = models.URLField(max_length = 200)
    logo = models.URLField(max_length = 200,blank=True)
    MyMainimage = models.URLField(max_length = 200)
    Myimage = models.URLField(max_length = 200)
    Backgroundimage = models.URLField(max_length = 200)
    Quote=models.CharField(max_length=100)

class Resume(models.Model):
    id=models.AutoField(primary_key=True)
    MyResume = models.URLField(max_length = 200)
    
class Education(models.Model):
    id=models.AutoField(primary_key=True)
    Year = models.CharField(max_length=100)
    Title = models.CharField(max_length=100)
    CenterName = models.CharField(max_length=100)
    RankType = models.CharField(max_length=100)
    Status = models.BooleanField()
    Rank = models.CharField(max_length=100)

class Skills(models.Model):
    id=models.AutoField(primary_key=True)
    SkillName = models.CharField(max_length=100)
    Rank = models.CharField(max_length=100)

class Experiences(models.Model):
    id=models.AutoField(primary_key=True)
    Type = models.CharField(max_length=100)
    joinDate=models.DateField()
    EndDate=models.DateField(blank=True)
    Organization = models.CharField(max_length=100)
    Title = models.CharField(max_length=100)
    Description = models.TextField()
    
class Projects(models.Model):
    id=models.AutoField(primary_key=True)
    ProjectName = models.CharField(max_length=100)
    Technology = models.CharField(max_length=200,default='null')
    Discription = models.TextField(default='null')
    ProjectLink = models.URLField(max_length = 200)

class Softwares(models.Model):
    id=models.AutoField(primary_key=True)
    SoftwareName = models.CharField(max_length=100)
    Softwareimage = models.URLField(max_length = 200)


