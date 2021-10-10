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
    logo = models.ImageField(upload_to='pic')
    Profilepic = models.ImageField(upload_to='pic')
    Bannerpic = models.ImageField(upload_to='pic')
    Aboutpic = models.ImageField(upload_to='pic')
    CurrentStatus=models.CharField(max_length=100)
    Proffesion1=models.CharField(max_length=100,default='developer')
    Proffesion2=models.CharField(max_length=100,default='developer')
    Proffesion3=models.CharField(max_length=100,default='developer')
    Proffesion4=models.CharField(max_length=100,default='developer')
    AboutTitle=models.CharField(max_length=100,default='Title')
    AboutPicTitle=models.CharField(max_length=100,default='TitlePic')
    AboutPicDesc=models.TextField(default='Title Decription')

class OtherDetail(models.Model):
    Skillquote1=models.CharField(max_length=100)
    Skillquote2=models.CharField(max_length=100)
    Softquote1=models.CharField(max_length=100)
    Softquote2=models.CharField(max_length=100)
    Tagquote1=models.CharField(max_length=100)
    Tagquote2=models.CharField(max_length=100)
    Tagquote3=models.CharField(max_length=100)
    Featurepic = models.FileField(upload_to='pic')
    Tagpic = models.FileField(upload_to='pic')
    Bannerbackground = models.FileField(upload_to='pic')

class Resume(models.Model):
    id=models.AutoField(primary_key=True)
    MyResume = models.FileField(upload_to='files')
    
class Education(models.Model):
    id=models.AutoField(primary_key=True)
    Year = models.CharField(max_length=100)
    Title = models.CharField(max_length=100)
    CenterName = models.CharField(max_length=100)
    Discription = models.TextField(default='Discription')
    RankType = models.CharField(max_length=100)
    Status = models.BooleanField()
    Rank = models.CharField(max_length=100)
    Colour = models.CharField(max_length=100,default='black')

    def _str_(self):
        return self.Title

class Skills(models.Model):
    id=models.AutoField(primary_key=True)
    SkillName = models.CharField(max_length=100)
    Rank = models.CharField(max_length=100)

    def _str_(self):
        return self.SkillName

class Experiences(models.Model):
    id=models.AutoField(primary_key=True)
    Type = models.CharField(max_length=100)
    joinDate=models.DateField()
    EndDate=models.DateField()
    Status = models.BooleanField(default=False)
    Organization = models.CharField(max_length=100)
    Title = models.CharField(max_length=100)
    Description = models.TextField()
    Colour = models.CharField(max_length=100,default='black')

    def _str_(self):
        return self.Organization
    
class Projects(models.Model):
    id=models.AutoField(primary_key=True)
    ProjectName = models.CharField(max_length=100)
    Technology = models.CharField(max_length=200,default='null')
    Discription = models.TextField(default='null')
    ProjectLink = models.URLField(max_length = 200)

    def _str_(self):
        return self.ProjectName

class Softwares(models.Model):
    id=models.AutoField(primary_key=True)
    SoftwareName = models.CharField(max_length=100)
    Softwareimage = models.ImageField(upload_to='pic')

    def _str_(self):
        return self.SoftwareName



